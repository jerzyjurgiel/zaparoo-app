import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "../components/wui/Button";
import { useSwipeable } from "react-swipeable";
import { WriteModal } from "../components/WriteModal";
import { useEffect, useState } from "react";
import { useNfcWriter, WriteAction } from "../lib/writeNfcHook";
import { PageFrame } from "../components/PageFrame";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/create/nfc")({
  component: NfcUtils
});

function NfcUtils() {
  const nfcWriter = useNfcWriter();
  const [writeOpen, setWriteOpen] = useState(false);
  const closeWriteModal = () => {
    setWriteOpen(false);
    nfcWriter.end();
  };

  const { t } = useTranslation();

  useEffect(() => {
    if (nfcWriter.status !== null) {
      console.log(JSON.stringify(nfcWriter.result?.info.rawTag));
      setWriteOpen(false);
      nfcWriter.end();
    }
  }, [nfcWriter]);

  const navigate = useNavigate();
  const swipeHandlers = useSwipeable({
    onSwipedRight: () => navigate({ to: "/create" })
  });

  // TODO: check nfc is enabled
  // TODO: check for android for format

  return (
    <>
      <div {...swipeHandlers}>
        <PageFrame
          title={t("create.nfc.title")}
          back={() => navigate({ to: "/create" })}
        >
          <div className="flex flex-col gap-3">
            <Button
              label={t("create.nfc.read")}
              onClick={() => {
                nfcWriter.write(WriteAction.Read);
                setWriteOpen(true);
              }}
            />

            <Button disabled={true} label={t("create.nfc.format")} />
            <Button disabled={true} label={t("create.nfc.erase")} />
            <Button disabled={true} label={t("create.nfc.makeReadOnly")} />

            {nfcWriter.result?.info?.rawTag && nfcWriter.result?.info?.tag && (
              <div>{JSON.stringify(nfcWriter.result)}</div>
            )}
          </div>
        </PageFrame>
      </div>
      <WriteModal isOpen={writeOpen} close={closeWriteModal} />
    </>
  );
}
