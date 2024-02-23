export default function LeaveReviewButtonItem(props: {url: string, class: string}) {
  return (
    <a
    href={props.url}
    target="_blank"
    className={`leave-review-button-item ${props.class}`}
    >
    {props.class.charAt(0).toUpperCase() + props.class.slice(1)}
    </a>
  )
}
