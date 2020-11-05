/**
 *
 * Written by vlad on 02/11/2020
 */

export default function({ app }, inject) {
  const dir = () => app.i18n.locales.find(x => x.code === app.i18n.locale)?.dir
  inject('dir', dir)
}
