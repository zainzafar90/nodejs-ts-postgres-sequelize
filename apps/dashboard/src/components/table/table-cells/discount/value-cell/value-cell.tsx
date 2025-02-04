import { DiscountRule } from '@medusajs/medusa';

import { MoneyAmountCell } from '../../common/money-amount-cell';

type DiscountCellProps = {
  rule: DiscountRule;
  currencyCode: string;
};

export const ValueCell = ({ currencyCode, rule }: DiscountCellProps) => {
  const isFixed = rule.type === 'fixed';
  const isPercentage = rule.type === 'percentage';
  const isFreeShipping = rule.type === 'free_shipping';

  return (
    <div className="flex h-full w-full items-center gap-x-3 overflow-hidden">
      {isFreeShipping && <span>Free shipping</span>}
      {isPercentage && <span className="">{rule.value}%</span>}
      {isFixed && <MoneyAmountCell currencyCode={currencyCode} amount={rule.value} />}
    </div>
  );
};

export const ValueHeader = () => {
  return (
    <div className=" flex h-full w-full items-center ">
      <span>Value</span>
    </div>
  );
};
