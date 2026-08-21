import React, { createContext, useContext, useEffect, useMemo } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import projectsData from '@data/projects.json'
import { profiles, skillCatalog, DEFAULT_PROFILE } from '@config/profiles'

const ProfileContext = createContext(null)

// Filter to projects relevant to this role, heaviest first.
// Equal weights fall back to their order in projects.json (sort is stable).

export const selectProjects = (projects, profileId) => 
    projects
        .map((project, index) => ({ project, index, weight: project.roles?.[profileId] ?? 0}))
        .filter((entry) => entry.weight > 0)
        .sort((a, b) => b.weight - a.weight || a.index - b.index)
        .map((entry) => entry.project)

export const ProfileProvider = ({ children }) => {
    const { profileId } = useParams()
    const isKnown = profileId === undefined || Boolean(profiles[profileId])
    const activeId = profiles[profileId] ? profileId : DEFAULT_PROFILE
    const profile = profiles[activeId]

    const value = useMemo(() => ({
        profileId: activeId,
        profile,
        projects: selectProjects(projectsData.projects, activeId),
        skills: profile.skillCards.map((id) => skillCatalog[id]).filter(Boolean),
    }), [activeId, profile])

    useEffect(() => {
        if (isKnown) document.title = profile.documentTitle
    }, [isKnown, profile])

    if (!isKnown) return <Navigate to="/" replace />

    return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

export const useProfile = () => {
    const context = useContext(ProfileContext)
    if (!context) throw new Error('useProfile must be used inside a ProfileProvider')
    return context
}