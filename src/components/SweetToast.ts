import Swal from "sweetalert2";

const SweetToast = Swal.mixin({
  toast: true,
  position: "top-end",
  icon: "success",
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  showCloseButton: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const SweetConfirmation = Swal.mixin({
  position: "center",
  icon: "warning",
  showCloseButton: true,
  showCancelButton: true,
  confirmButtonText: "Je confirme",
  customClass: {
    confirmButton: "rounded-pill px-3 mx-2 btn btn-primary",
    cancelButton: "rounded-pill px-3 mx-2 btn btn-outline-secondary",
  },
  buttonsStyling: false,
});

export default SweetToast;
