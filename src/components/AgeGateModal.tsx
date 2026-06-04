type AgeGateModalProps = {
  open: boolean;
  blocked: boolean;
  onConfirm: () => void;
  onReject: () => void;
};

export function AgeGateModal({
  open,
  blocked,
  onConfirm,
  onReject
}: AgeGateModalProps) {
  if (!open && !blocked) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 px-4 backdrop-blur-xl">
      <div className="glass-panel max-w-lg rounded-[2rem] p-8 text-center shadow-luxe">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl font-semibold text-lime">
          18+
        </div>

        {blocked ? (
          <>
            <h2 className="font-display text-3xl font-bold text-white">
              Adults only
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              This website sells nicotine products and is intended for adults
              only. Access is restricted if you are under 18.
            </p>
          </>
        ) : (
          <>
            <h2 className="font-display text-3xl font-bold text-white">
              Are you 18 or older?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              This website sells nicotine products and is intended for adults
              only.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onConfirm}
                className="btn-primary flex-1"
              >
                Yes, I am 18+
              </button>
              <button
                type="button"
                onClick={onReject}
                className="btn-secondary flex-1"
              >
                No, exit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
