type IncDecBtnContainerProps = {
  quantity: number;
  selectedId: string;
  handleClickQuantityDec: () => void;
  handleClickQuantityInc: () => void;
};

const IncDecBtnContainer = ({
  handleClickQuantityDec,
  handleClickQuantityInc,
  quantity,
  selectedId,
}: IncDecBtnContainerProps) => {
  return (
    <div className="flex items-center gap-6">
      <button
        disabled={selectedId === "" ? true : false}
        onClick={handleClickQuantityDec}
        className="disabled:bg-slate-200 disabled:active:scale-100 sm-btn border-black active:scale-90"
      >
        <span className="text-3xl">-</span>
      </button>
      <h3 className="text-xl font-semibold">{quantity}</h3>
      <button
        disabled={selectedId === "" ? true : false}
        onClick={handleClickQuantityInc}
        className="disabled:bg-slate-200 disabled:active:scale-100 sm-btn border-black active:scale-90"
      >
        <span className="text-3xl">+</span>
      </button>
    </div>
  );
};

export default IncDecBtnContainer;
