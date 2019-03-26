import { AbilityBuilder, Ability } from '@casl/ability'

export function defineAbilitiesFor(role) {
  const { can, rules } = AbilityBuilder.extract()

  if (role === 'admin') {
    can('manage', 'all')
  } else {
    can('read', 'all')
    can('manage', 'Todo', { assignee: 'me' })
  }

  return rules
}

export function createAbility() {
  return new Ability(defineAbilitiesFor('member'), {
    subjectName(subject) {
      if (!subject || typeof subject === 'string') {
        return subject;
      }

      return subject.__typename
    }
  })
}
