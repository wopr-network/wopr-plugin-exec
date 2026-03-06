import type { WOPRPluginManifest, WOPRPluginContext } from "@wopr-network/plugin-types";

export const manifest: WOPRPluginManifest = {
  id: "exec",
  name: "Shell Exec",
  version: "0.1.0",
  description: "Provides shell command execution capability",
  capabilities: [],
  tools: ["exec_command"],
};

export async function init(ctx: WOPRPluginContext): Promise<void> {
  ctx.security.registerPermission("inject.exec");
  ctx.security.registerToolPermission("exec_command", "inject.exec");
  ctx.logger.info("[wopr-plugin-exec] Registered inject.exec permission and exec_command tool");
}
