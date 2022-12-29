import { Notify } from "quasar";

export default function useNotify() {
  const notifySuccess = (message) => {
    Notify.create({
      type: "positive",
      message: message || "Procedimento efetuado com sucesso",
      actions: [
        {
          label: "Ok",
          color: "white",
          handler: () => {},
        },
      ],
    });
  };

  const notifyError = (message) => {
    Notify.create({
      type: "negative",
      message: message || "Ocorreu um erro inesperado",
      actions: [
        {
          label: "Ok",
          color: "white",
          handler: () => {},
        },
      ],
    });
  };

  return {
    notifySuccess,
    notifyError,
  };
}
