import swal from "sweetalert2";

const Toast = swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", swal.stopTimer);
    toast.addEventListener("mouseleave", swal.resumeTimer);
  },
});

const Alert = ({ message, type = "warning" }) =>
  Toast.fire({
    icon: type,
    title: message || type,
  });

export default Alert;
