import { Link } from 'react-router-dom';

import { ExclamationCircle, MagnifyingGlass, PlusMini } from '@medusajs/icons';
import { Button, clx, Text } from '@medusajs/ui';

type NoResultsProps = {
  title?: string;
  message?: string;
  className?: string;
};

export const NoResults = ({ title, message, className }: NoResultsProps) => {
  return (
    <div className={clx('flex h-[400px] w-full items-center justify-center', className)}>
      <div className="flex flex-col items-center gap-y-2">
        <MagnifyingGlass />
        <Text size="small" leading="compact" weight="plus">
          {title ?? 'No results'}
        </Text>
        <Text size="small" className="text-ui-fg-subtle">
          {message ?? 'Try changing the filters or search query'}
        </Text>
      </div>
    </div>
  );
};

type ActionProps = {
  action?: {
    to: string;
    label: string;
  };
};

type NoRecordsProps = {
  title?: string;
  message?: string;
  className?: string;
  buttonVariant?: string;
} & ActionProps;

const DefaultButton = ({ action }: ActionProps) =>
  action && (
    <Link to={action.to}>
      <Button variant="secondary" size="small">
        {action.label}
      </Button>
    </Link>
  );

const TransparentIconLeftButton = ({ action }: ActionProps) =>
  action && (
    <Link to={action.to}>
      <Button variant="transparent" className="text-ui-fg-interactive">
        <PlusMini /> {action.label}
      </Button>
    </Link>
  );

export const NoRecords = ({ title, message, action, className, buttonVariant = 'default' }: NoRecordsProps) => {
  return (
    <div className={clx('flex h-[400px] w-full flex-col items-center justify-center gap-y-6', className)}>
      <div className="flex flex-col items-center gap-y-2">
        <ExclamationCircle />

        <Text size="small" leading="compact" weight="plus">
          {title ?? 'No records'}
        </Text>

        <Text size="small" className="text-ui-fg-muted">
          {message ?? 'There are no records to show'}
        </Text>
      </div>

      {buttonVariant === 'default' && <DefaultButton action={action} />}
      {buttonVariant === 'transparentIconLeft' && <TransparentIconLeftButton action={action} />}
    </div>
  );
};
