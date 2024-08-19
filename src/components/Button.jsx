import { Show } from './Show';

function setButtonVariant(variant) {
  switch (variant) {
    case 'primary':
      return 'bg-primary shadow-sm text-white hover:bg-primary-border hover:bg-primary-dark';
    case 'neutral':
      return 'bg-white shadow-sm border-2 border-neutral-40 text-neutral-100 hover:bg-neutral-30';
    case 'danger':
      return 'bg-danger shadow-sm text-white hover:bg-danger-dark';
    case 'text':
      return 'text-neutral-100';
    default:
      return '';
  }
} 

export default function CustomButton(props) {
  const { children, className, imgClassName, startIcon, variant = 'primary', iconWidth, ...rest } = props;
  const buttonVariant = setButtonVariant(variant);

  return (
    <button {...rest} className={`h-fit py-1 px-4 text-center rounded-lg font-bold ${buttonVariant} ${className}`}>
      <div className={startIcon ? 'flex items-center gap-2' : ''}>
        <Show when={!!startIcon}>
          <img src={startIcon} alt='icon' className={`inline-block ${imgClassName}`} width={iconWidth} />
        </Show>
        {children}
      </div>
    </button>
  );
}