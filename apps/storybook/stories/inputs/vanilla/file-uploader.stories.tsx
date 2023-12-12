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
      <div className="w-96 m-3">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof useFileUploader>;

export const Normal: Story = {
  render: () => <NormalComponent />,
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
        <ul className="p-2 space-y-2">
          {acceptedFiles.map((file) => (
            <li key={file.name}>
              <AcceptedFile
                delFunction={() => {
                  console.warn(`Delete File: ${file.name}`);
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
        <ul className="p-2 space-y-2">
          {fileRejections.map((file) => (
            <li key={file.file.name}>
              <RejectedFile errors={file.errors} name={file.file.name} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-bold tracking-tight">Status:</div>
        <div className="p-2 gap-y-3 grid grid-cols-2">
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
