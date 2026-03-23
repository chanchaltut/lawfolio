import React, { useEffect, useState } from 'react'
import { SOCIAL_LINKS } from '../utils/constants'

const STORAGE_KEY = 'juris-associates-disclaimer-accepted'

/** Display host like in the reference (www.example.com) */
function websiteDisplayHost() {
    try {
        const u = new URL(SOCIAL_LINKS.website)
        const host = u.hostname
        return host.startsWith('www.') ? host : `www.${host.replace(/^www\./, '')}`
    } catch {
        return 'www.jurisassociates.com'
    }
}

export default function DisclaimerModal() {
    const [visible, setVisible] = useState(false)
    const [accepted, setAccepted] = useState(false)
    const displayHost = websiteDisplayHost()

    useEffect(() => {
        try {
            if (localStorage.getItem(STORAGE_KEY) === '1') return
        } catch {
            /* ignore */
        }
        setVisible(true)
    }, [])

    useEffect(() => {
        if (!visible) return
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = prev
        }
    }, [visible])

    const handleProceed = () => {
        if (!accepted) return
        try {
            localStorage.setItem(STORAGE_KEY, '1')
        } catch {
            /* ignore */
        }
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="disclaimer-title"
        >
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
                aria-hidden="true"
            />
            <div className="relative w-full max-w-[min(100%,28rem)] max-h-[min(90vh,640px)] overflow-y-auto rounded-sm bg-white px-6 py-7 shadow-xl sm:px-8 sm:py-8">
                <h2
                    id="disclaimer-title"
                    className="mb-4 text-left text-xl font-bold text-neutral-900"
                >
                    Disclaimer
                </h2>
                <div className="space-y-4 text-left text-[15px] leading-relaxed text-neutral-800 sm:text-base">
                    <p>
                        The Bar Council of India doesn&apos;t allow lawyers to advertise or promote their services in any way. By visiting{' '}
                        {displayHost}, you confirm that you&apos;re looking for information about Juris Associates on your own, without any encouragement or invitation from us.
                    </p>
                    <p>
                        The content on this website is for general information purposes only and should not be considered as legal advice or a professional recommendation. If you need legal assistance, it is always best to consult directly with a qualified lawyer.
                    </p>
                    <p>
                        Please note that Juris Associates will not be responsible for any actions taken based on the information provided here. We also cannot guarantee that the information on this site is up-to-date or accurate at all times.
                    </p>
                    <p>
                        All materials on this website are owned by Juris Associates and are protected by intellectual property laws.
                    </p>
                </div>

                <label className="mt-6 flex cursor-pointer items-center gap-3 select-none">
                    <input
                        type="checkbox"
                        checked={accepted}
                        onChange={(e) => setAccepted(e.target.checked)}
                        className="h-[18px] w-[18px] shrink-0 cursor-pointer rounded border-neutral-400 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    />
                    <span className="text-left text-[15px] text-neutral-900 sm:text-base">
                        I accept the above.
                    </span>
                </label>

                <button
                    type="button"
                    disabled={!accepted}
                    onClick={handleProceed}
                    className="mt-1 w-full rounded-sm bg-[#FFD700] py-3.5 text-center text-sm font-bold uppercase tracking-wide text-black transition-opacity disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:opacity-90"
                >
                    Proceed to website
                </button>
            </div>
        </div>
    )
}
