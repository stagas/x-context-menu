/** @jsxImportSource sigl */
import $ from 'sigl'

import { getRelativeMouseFromEvent } from 'relative-mouse'
import { Point, Rect } from 'sigl'
import { PopupElement, PopupSceneLocal } from 'x-popup'
import { SurfaceElement, SurfaceItemElement } from 'x-surface'

let currentMouseEvent: MouseEvent
let remove: ((e?: PointerEvent) => void) | null
let offPointerDown: (() => void) | null

const ContextMenuOptionClassName = 'context-menu-option'

export const ContextMenuOption = ({ action, disabled, keyboard, children }: {
  action?: (e: MouseEvent) => void
  disabled?: boolean
  keyboard?: string[]
  children?: JSX.Element
}): JSX.Element => (
  <a
    class={[ContextMenuOptionClassName, disabled && `${ContextMenuOptionClassName}-disabled`].filter(Boolean).join(' ')}
    onpointerdown={!disabled && action && $.event.stop.capture()}
    onpointerup={!disabled && action && $.event.stop()}
    onclick={!disabled && $.event.stop.prevent(() => {
      //!warn 'context menu action', action
      action?.(currentMouseEvent)
      remove?.()
    })}
  >
    {children}
    {keyboard && <span class="context-menu-option-kbd">{keyboard.map(x => <kbd>{x}</kbd>)}</span>}
  </a>
)

export interface ContextMenuProps {
  anchorDestination?: HTMLElement
  popupDestination: HTMLElement
  surface: SurfaceElement
  scene: PopupSceneLocal
  sticky?: boolean
  Options: (props: { event: MouseEvent }) => JSX.Element
}

export const onContextMenu = ({
  anchorDestination: destination = document.body,
  popupDestination,
  surface,
  scene,
  sticky,
  Options,
}: ContextMenuProps) =>
  $.event.stop.prevent((e: MouseEvent) => {
    currentMouseEvent = e

    remove?.()

    $.element(SurfaceItemElement)
    const Popup = $.element(PopupElement)

    const pos = new Point(
      getRelativeMouseFromEvent(surface, e)
    ).transformSelf(surface.viewMatrix.inverse())

    const anchor = new SurfaceItemElement()
    anchor.rect = new Rect(pos.x, pos.y, 0, 0)
    destination.appendChild(anchor)

    const popup: $.Ref<PopupElement> = { current: null }

    popupDestination.appendChild($.render(
      <Popup
        class="context-menu"
        key={Math.random()}
        {...{ surface, scene }}
        ref={popup}
        dest={anchor}
        rigid={true}
        placement="se"
      >
        <div class="context-menu-contents">
          <Options event={e} />
        </div>
      </Popup>
    ))

    //!? 'context menu destination', popupDestination

    remove = (e?: PointerEvent) => {
      if (e?.composedPath().some((x: EventTarget) => (x as Element).classList?.contains(ContextMenuOptionClassName))) {
        return
      }
      //!? 'remove context menu'
      offPointerDown?.()
      anchor.remove()
      popup.current?.remove()
      remove = null
      offPointerDown = null
    }

    $.on(window).pointerup.once(() => {
      offPointerDown?.()
      offPointerDown = $.on(window).pointerdown.capture(e => {
        if (!sticky || e?.composedPath().includes(popup.current!)) {
          remove?.(e)
        }
      })
    })
  })
