import {
  LoadingInput,
  useFileUploader,
  AcceptedFile,
  Uploader,
  RejectedFile,
  Button,
  VanillaSwitch,
  Label,
} from "@silverweb/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Uploader> = {
  title: "Inputs/ Vanilla/ FileUploader",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="m-3 w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Uploader>;

export const Normal: Story = {
  render: () => <NormalComponent />,
};

export const ChangedHeading: Story = {
  args: {
    heading: "Changed Heading",
    dragHeading: "Changed Drag Heading",
  },
  render: (args) => <ChangedComponent {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <DisabledComponent {...args} />,
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
  render: (args) => <ReadOnlyComponent {...args} />,
};

export const Success: Story = {
  args: {
    status: "success",
  },
  render: (args) => <StatusComponent {...args} />,
};

export const Error: Story = {
  args: {
    status: "error",
  },
  render: (args) => <StatusComponent {...args} />,
};

export const Loading: Story = {
  render: () => <LoadingInput variant="file" />,
};

function NormalComponent(): JSX.Element {
  const {
    inputRef,
    rootRef,
    open,
    getInputProps,
    getRootProps,
    isDragActive,
    isDragReject,
    isDragAccept,
    isFileDialogActive,
    isFocused,
    acceptedFiles,
    fileRejections,
  } = useFileUploader({});
  return (
    <div className="space-y-3">
      <Uploader
        getInputProps={getInputProps}
        getRootProps={getRootProps}
        isDragActive={isDragAccept}
        isFileDialogActive={isFileDialogActive}
      />
      <div>
        <div className="font-bold">AcceptedFiles:</div>
        <ul className="space-y-2 p-2">
          {acceptedFiles.map((file) => (
            <li key={file.name}>
              <AcceptedFile
                delFunction={(name) => {
                  console.warn(`Delete File: ${name}`);
                }}
                name={file.name}
                size={file.size}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-bold">RejectedFiles:</div>
        <ul className="space-y-2 p-2">
          {fileRejections.map((file) => (
            <li key={file.file.name}>
              <RejectedFile
                delFunction={(name) => {
                  console.warn(`Delete File: ${name}`);
                }}
                errors={file.errors}
                name={file.file.name}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-bold tracking-tight">Status:</div>
        <div className="grid grid-cols-2 gap-y-3 p-2">
          <Label htmlFor="isDragAccept">isDragAccept</Label>
          <VanillaSwitch checked={isDragAccept} id="isDragAccept" />

          <Label htmlFor="isDragActive">isDragActive</Label>
          <VanillaSwitch checked={isDragActive} id="isDragActive" />

          <Label htmlFor="isDragReject">isDragReject</Label>
          <VanillaSwitch checked={isDragReject} id="isDragReject" />

          <Label htmlFor="isFileDialogActive">isFileDialogActive</Label>
          <VanillaSwitch checked={isFileDialogActive} id="isFileDialogActive" />

          <Label htmlFor="isFocused">isFocused</Label>
          <VanillaSwitch checked={isFocused} id="isFocused" />
        </div>
      </div>
      <div>
        <div className="font-bold tracking-tight">Controls:</div>
        <div className="flex gap-3 p-2">
          <Button
            onClick={() => {
              open();
            }}
          >
            Open
          </Button>
          <Button
            onClick={() => {
              rootRef.current?.focus();
            }}
          >
            Focus Root
          </Button>
          <Button
            onClick={() => {
              inputRef.current?.click();
            }}
          >
            Click Input
          </Button>
        </div>
      </div>
    </div>
  );
}

function ChangedComponent(props: Story["args"]): JSX.Element {
  const { heading, dragHeading } = props as {
    heading?: string;
    dragHeading?: string;
  };
  const {
    inputRef,
    rootRef,
    open,
    getInputProps,
    getRootProps,
    isDragActive,
    isDragReject,
    isDragAccept,
    isFileDialogActive,
    isFocused,
    acceptedFiles,
    fileRejections,
  } = useFileUploader({});
  return (
    <div className="space-y-3">
      <Uploader
        dragHeading={dragHeading}
        getInputProps={getInputProps}
        getRootProps={getRootProps}
        heading={heading}
        isDragActive={isDragAccept}
        isFileDialogActive={isFileDialogActive}
      />
      <div>
        <div className="font-bold">AcceptedFiles:</div>
        <ul className="space-y-2 p-2">
          {acceptedFiles.map((file) => (
            <li key={file.name}>
              <AcceptedFile
                delFunction={(name) => {
                  console.warn(`Delete File: ${name}`);
                }}
                name={file.name}
                size={file.size}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-bold">RejectedFiles:</div>
        <ul className="space-y-2 p-2">
          {fileRejections.map((file) => (
            <li key={file.file.name}>
              <RejectedFile
                delFunction={(name) => {
                  console.warn(`Delete File: ${name}`);
                }}
                errors={file.errors}
                name={file.file.name}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-bold tracking-tight">Status:</div>
        <div className="grid grid-cols-2 gap-y-3 p-2">
          <Label htmlFor="isDragAccept">isDragAccept</Label>
          <VanillaSwitch checked={isDragAccept} id="isDragAccept" />

          <Label htmlFor="isDragActive">isDragActive</Label>
          <VanillaSwitch checked={isDragActive} id="isDragActive" />

          <Label htmlFor="isDragReject">isDragReject</Label>
          <VanillaSwitch checked={isDragReject} id="isDragReject" />

          <Label htmlFor="isFileDialogActive">isFileDialogActive</Label>
          <VanillaSwitch checked={isFileDialogActive} id="isFileDialogActive" />

          <Label htmlFor="isFocused">isFocused</Label>
          <VanillaSwitch checked={isFocused} id="isFocused" />
        </div>
      </div>
      <div>
        <div className="font-bold tracking-tight">Controls:</div>
        <div className="flex gap-3 p-2">
          <Button
            onClick={() => {
              open();
            }}
          >
            Open
          </Button>
          <Button
            onClick={() => {
              rootRef.current?.focus();
            }}
          >
            Focus Root
          </Button>
          <Button
            onClick={() => {
              inputRef.current?.click();
            }}
          >
            Click Input
          </Button>
        </div>
      </div>
    </div>
  );
}

function DisabledComponent(props: Story["args"]): JSX.Element {
  const { disabled } = props as {
    disabled: boolean;
  };
  const {
    inputRef,
    rootRef,
    open,
    getInputProps,
    getRootProps,
    isDragActive,
    isDragReject,
    isDragAccept,
    isFileDialogActive,
    isFocused,
    acceptedFiles,
    fileRejections,
  } = useFileUploader({
    disabled,
  });
  return (
    <div className="space-y-3">
      <Uploader
        disabled={disabled}
        getInputProps={getInputProps}
        getRootProps={getRootProps}
        isDragActive={isDragAccept}
        isFileDialogActive={isFileDialogActive}
      />
      <div>
        <div className="font-bold">AcceptedFiles:</div>
        <ul className="space-y-2 p-2">
          {acceptedFiles.map((file) => (
            <li key={file.name}>
              <AcceptedFile
                delFunction={(name) => {
                  console.warn(`Delete File: ${name}`);
                }}
                name={file.name}
                size={file.size}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-bold">RejectedFiles:</div>
        <ul className="space-y-2 p-2">
          {fileRejections.map((file) => (
            <li key={file.file.name}>
              <RejectedFile
                delFunction={(name) => {
                  console.warn(`Delete File: ${name}`);
                }}
                errors={file.errors}
                name={file.file.name}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-bold tracking-tight">Status:</div>
        <div className="grid grid-cols-2 gap-y-3 p-2">
          <Label htmlFor="isDragAccept">isDragAccept</Label>
          <VanillaSwitch checked={isDragAccept} id="isDragAccept" />

          <Label htmlFor="isDragActive">isDragActive</Label>
          <VanillaSwitch checked={isDragActive} id="isDragActive" />

          <Label htmlFor="isDragReject">isDragReject</Label>
          <VanillaSwitch checked={isDragReject} id="isDragReject" />

          <Label htmlFor="isFileDialogActive">isFileDialogActive</Label>
          <VanillaSwitch checked={isFileDialogActive} id="isFileDialogActive" />

          <Label htmlFor="isFocused">isFocused</Label>
          <VanillaSwitch checked={isFocused} id="isFocused" />
        </div>
      </div>
      <div>
        <div className="font-bold tracking-tight">Controls:</div>
        <div className="flex gap-3 p-2">
          <Button
            onClick={() => {
              open();
            }}
          >
            Open
          </Button>
          <Button
            onClick={() => {
              rootRef.current?.focus();
            }}
          >
            Focus Root
          </Button>
          <Button
            onClick={() => {
              inputRef.current?.click();
            }}
          >
            Click Input
          </Button>
        </div>
      </div>
    </div>
  );
}

function ReadOnlyComponent(props: Story["args"]): JSX.Element {
  const { readOnly } = props as {
    readOnly: boolean;
  };
  const {
    inputRef,
    rootRef,
    open,
    getInputProps,
    getRootProps,
    isDragActive,
    isDragReject,
    isDragAccept,
    isFileDialogActive,
    isFocused,
    acceptedFiles,
    fileRejections,
  } = useFileUploader({
    disabled: readOnly,
  });
  return (
    <div className="space-y-3">
      <Uploader
        getInputProps={getInputProps}
        getRootProps={getRootProps}
        isDragActive={isDragAccept}
        isFileDialogActive={isFileDialogActive}
        readOnly={readOnly}
      />
      <div>
        <div className="font-bold">AcceptedFiles:</div>
        <ul className="space-y-2 p-2">
          {acceptedFiles.map((file) => (
            <li key={file.name}>
              <AcceptedFile
                delFunction={(name) => {
                  console.warn(`Delete File: ${name}`);
                }}
                name={file.name}
                size={file.size}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-bold">RejectedFiles:</div>
        <ul className="space-y-2 p-2">
          {fileRejections.map((file) => (
            <li key={file.file.name}>
              <RejectedFile
                delFunction={(name) => {
                  console.warn(`Delete File: ${name}`);
                }}
                errors={file.errors}
                name={file.file.name}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-bold tracking-tight">Status:</div>
        <div className="grid grid-cols-2 gap-y-3 p-2">
          <Label htmlFor="isDragAccept">isDragAccept</Label>
          <VanillaSwitch checked={isDragAccept} id="isDragAccept" />

          <Label htmlFor="isDragActive">isDragActive</Label>
          <VanillaSwitch checked={isDragActive} id="isDragActive" />

          <Label htmlFor="isDragReject">isDragReject</Label>
          <VanillaSwitch checked={isDragReject} id="isDragReject" />

          <Label htmlFor="isFileDialogActive">isFileDialogActive</Label>
          <VanillaSwitch checked={isFileDialogActive} id="isFileDialogActive" />

          <Label htmlFor="isFocused">isFocused</Label>
          <VanillaSwitch checked={isFocused} id="isFocused" />
        </div>
      </div>
      <div>
        <div className="font-bold tracking-tight">Controls:</div>
        <div className="flex gap-3 p-2">
          <Button
            onClick={() => {
              open();
            }}
          >
            Open
          </Button>
          <Button
            onClick={() => {
              rootRef.current?.focus();
            }}
          >
            Focus Root
          </Button>
          <Button
            onClick={() => {
              inputRef.current?.click();
            }}
          >
            Click Input
          </Button>
        </div>
      </div>
    </div>
  );
}

function StatusComponent(props: Story["args"]): JSX.Element {
  const { status } = props as {
    status: "success" | "error";
  };
  const {
    inputRef,
    rootRef,
    open,
    getInputProps,
    getRootProps,
    isDragActive,
    isDragReject,
    isDragAccept,
    isFileDialogActive,
    isFocused,
    acceptedFiles,
    fileRejections,
  } = useFileUploader({});
  return (
    <div className="space-y-3">
      <Uploader
        getInputProps={getInputProps}
        getRootProps={getRootProps}
        isDragActive={isDragAccept}
        isFileDialogActive={isFileDialogActive}
        status={status}
      />
      <div>
        <div className="font-bold">AcceptedFiles:</div>
        <ul className="space-y-2 p-2">
          {acceptedFiles.map((file) => (
            <li key={file.name}>
              <AcceptedFile
                delFunction={(name) => {
                  console.warn(`Delete File: ${name}`);
                }}
                name={file.name}
                size={file.size}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-bold">RejectedFiles:</div>
        <ul className="space-y-2 p-2">
          {fileRejections.map((file) => (
            <li key={file.file.name}>
              <RejectedFile
                delFunction={(name) => {
                  console.warn(`Delete File: ${name}`);
                }}
                errors={file.errors}
                name={file.file.name}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-bold tracking-tight">Status:</div>
        <div className="grid grid-cols-2 gap-y-3 p-2">
          <Label htmlFor="isDragAccept">isDragAccept</Label>
          <VanillaSwitch checked={isDragAccept} id="isDragAccept" />

          <Label htmlFor="isDragActive">isDragActive</Label>
          <VanillaSwitch checked={isDragActive} id="isDragActive" />

          <Label htmlFor="isDragReject">isDragReject</Label>
          <VanillaSwitch checked={isDragReject} id="isDragReject" />

          <Label htmlFor="isFileDialogActive">isFileDialogActive</Label>
          <VanillaSwitch checked={isFileDialogActive} id="isFileDialogActive" />

          <Label htmlFor="isFocused">isFocused</Label>
          <VanillaSwitch checked={isFocused} id="isFocused" />
        </div>
      </div>
      <div>
        <div className="font-bold tracking-tight">Controls:</div>
        <div className="flex gap-3 p-2">
          <Button
            onClick={() => {
              open();
            }}
          >
            Open
          </Button>
          <Button
            onClick={() => {
              rootRef.current?.focus();
            }}
          >
            Focus Root
          </Button>
          <Button
            onClick={() => {
              inputRef.current?.click();
            }}
          >
            Click Input
          </Button>
        </div>
      </div>
    </div>
  );
}
