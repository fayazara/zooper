import type { ComputedRef } from 'vue';
import type { CSSProperties } from 'vue';
import type { Ref } from 'vue';
import type { ShallowRef } from 'vue';

export declare type MaybeTemplateRef = HTMLElement | null | Ref<HTMLElement | null>;

export declare function useFixedHeader(target: MaybeTemplateRef, options?: UseFixedHeaderOptions): UseFixedHeaderReturn;

export declare interface UseFixedHeaderOptions<T = any> {
  /**
   * Use `null` if content is scrolled by the window (default),
   * otherwise pass a custom scrolling container template ref */
  root?: MaybeTemplateRef;
  /**
   * Whether to toggle `visibility: hidden` on leave.
   * Set this to `false` if you want to keep the header
   * visible.
   */
  toggleVisibility?: boolean;
  /**
   * ref or computed to watch for automatic behavior toggling */
  watch?: Ref<T> | ComputedRef<T>;
  /**
   * Minimum acceleration delta required to hide the header */
  leaveDelta?: number;
  /**
   * Minimum acceleration delta required to show the header */
  enterDelta?: number;
  /**
   * Custom enter transition styles */
  enterStyles?: CSSProperties;
  /**
   * Custom leave transition styles */
  leaveStyles?: CSSProperties;
}

export declare interface UseFixedHeaderReturn {
  styles: ShallowRef<CSSProperties>;
  isLeave: ComputedRef<boolean>;
  isEnter: ComputedRef<boolean>;
}

export { }
