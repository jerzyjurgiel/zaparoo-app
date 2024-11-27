import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "../components/wui/Button";
import { useSwipeable } from "react-swipeable";
import { Browser } from "@capacitor/browser";
import { PageFrame } from "../components/PageFrame";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/settings/help")({
  component: Help
});

function Help() {
  const navigate = useNavigate();
  const swipeHandlers = useSwipeable({
    onSwipedRight: () => navigate({ to: "/settings" })
  });

  const { t } = useTranslation();

  return (
    <div {...swipeHandlers}>
      <PageFrame
        title={t("settings.help.title")}
        back={() => navigate({ to: "/settings" })}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-lg font-semibold">
              {t("settings.help.documentationLabel")}
            </h2>
            <Button
              label={t("settings.help.taptoWiki")}
              variant="outline"
              onClick={() =>
                Browser.open({
                  url: "https://tapto.wiki/"
                })
              }
            />
            <Button
              label={t("settings.help.gettingStarted")}
              variant="outline"
              onClick={() =>
                Browser.open({
                  url: "https://tapto.wiki/Getting_Started"
                })
              }
            />
            <Button
              label={t("settings.help.commandReference")}
              variant="outline"
              onClick={() =>
                Browser.open({
                  url: "https://tapto.wiki/TapScript"
                })
              }
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-center text-lg font-semibold">
              {t("settings.help.communityLabel")}
            </h2>
            <Button
              label={t("settings.help.discord")}
              variant="outline"
              onClick={() =>
                Browser.open({
                  url: "https://wizzo.dev/discord"
                })
              }
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-center text-lg font-semibold">
              {t("settings.help.technicalSupport")}
            </h2>
            <Button
              label={t("settings.help.reportIssue")}
              variant="outline"
              onClick={() =>
                Browser.open({
                  url: "https://github.com/TapToCommunity/tapto/issues/new"
                })
              }
            />
            <p className="text-center">
              {t("settings.help.emailLabel")}{" "}
              <a className="underline" href="mailto:support@wizzo.dev">
                support@wizzo.dev
              </a>
            </p>
          </div>
        </div>
      </PageFrame>
    </div>
  );
}
