import type { Metadata } from "next";
import Image from "next/image";
import { brand } from "@/config/brand";

export const metadata: Metadata = { title: "Rewards" };

const { rewards } = brand;
const userPoints  = 2450;
const nextTier    = rewards.tiers[1];
const pointsToNext = nextTier.minPoints - userPoints;
const progress     = Math.round((userPoints / nextTier.minPoints) * 100);

export default function RewardsPage() {
  return (
    <div className="pt-4 pb-8 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Points hero */}
      <section className="relative mb-10 md:mb-16 overflow-hidden rounded-2xl md:rounded-[2rem] bg-gradient-to-br from-primary to-primary-container p-6 sm:p-8 md:p-12 text-on-primary">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="w-full md:w-1/2">
            <span className="font-label text-sm uppercase tracking-widest opacity-80 mb-2 block">
              Your Balance
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
              {userPoints.toLocaleString()}{" "}
              <span className="text-2xl font-medium tracking-normal opacity-90">
                {rewards.programName}
              </span>
            </h1>
            <div className="mt-8">
              <div className="flex justify-between items-end mb-3">
                <span className="text-sm font-medium">{rewards.tiers[0].name} Tier</span>
                <span className="text-xs opacity-80 italic">
                  {pointsToNext} pts to {nextTier.name}
                </span>
              </div>
              <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
          <div className="hidden md:block w-1/3">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <span className="material-symbols-outlined text-4xl mb-3 block">auto_awesome</span>
              <p className="text-sm font-medium leading-relaxed">
                You&apos;ve saved $120 this year through rewards. Keep climbing
                for exclusive priority scheduling.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-tertiary-fixed-dim/10 rounded-full blur-[80px] pointer-events-none" />
      </section>

      {/* Refer + history bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="md:col-span-2 bg-surface-container-lowest rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition-shadow">
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-primary mb-4 leading-tight">
              Refer a Friend, Earn {rewards.referralPoints} Points
            </h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Give your neighbors the gift of crystalline water. You&apos;ll
              both get bonus points once their first cleaning is complete.
            </p>
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
              Share Invite Link
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="w-full md:w-1/2 relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
            <Image
              src="/imgs/pexels-rosiane-276313188-32798481.jpg"
              alt="Friends enjoying a pool"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-tertiary text-on-tertiary rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group">
          <div className="z-10">
            <span className="material-symbols-outlined text-4xl mb-4 block">history</span>
            <h3 className="text-2xl font-bold mb-2">History</h3>
            <p className="text-on-tertiary/80 text-sm">
              Last earned: +50 pts (Weekly Maintenance)
            </p>
          </div>
          <button className="mt-8 text-sm font-bold flex items-center gap-2 z-10 hover:translate-x-2 transition-transform">
            View Activity Log{" "}
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
          <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform pointer-events-none">
            <span className="material-symbols-outlined text-8xl md:text-[12rem]">waves</span>
          </div>
        </div>
      </div>

      {/* Redeem rewards */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">
              Redeem Points
            </h2>
            <p className="text-on-surface-variant">Choose your perks and maintain your oasis.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.redeemable.map((reward) => {
            const canAfford = userPoints >= reward.points;
            return (
              <div
                key={reward.name}
                className={`p-6 rounded-[1.5rem] border border-transparent transition-all duration-300 group ${
                  reward.locked
                    ? "bg-surface-container-low/50 opacity-80 relative"
                    : "bg-surface-container-low hover:bg-white hover:border-outline-variant/20 hover:shadow-lg"
                }`}
              >
                {reward.locked && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-on-surface/5 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-on-surface/10">
                      <span className="material-symbols-outlined text-sm">lock</span>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        {(reward.points - userPoints).toLocaleString()} pts needed
                      </span>
                    </div>
                  </div>
                )}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                    reward.locked ? "bg-outline-variant/30" : "bg-secondary-container"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl ${
                      reward.locked ? "text-outline" : "text-on-secondary-container"
                    }`}
                  >
                    {reward.icon}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-1">{reward.name}</h4>
                <div className="flex items-center justify-between mt-auto pt-4">
                  <span
                    className={`font-extrabold ${reward.locked ? "text-outline" : "text-primary"}`}
                  >
                    {reward.points.toLocaleString()} pts
                  </span>
                  <button
                    disabled={reward.locked || !canAfford}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                      reward.locked
                        ? "bg-surface-container-highest text-outline cursor-not-allowed"
                        : "bg-surface-container-highest text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary"
                    }`}
                  >
                    {reward.locked ? "Locked" : "Redeem"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info section */}
      <section className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-16 bg-surface-container-high rounded-[3rem]">
        <div className="relative">
          <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/imgs/pexels-moph-32516576.jpg"
              alt="Crystal clear pool"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-3xl p-4 shadow-xl flex flex-col items-center justify-center -rotate-6">
            <span className="text-primary font-black text-3xl">5.0</span>
            <span className="text-[10px] font-bold uppercase text-on-surface-variant">Avg Rating</span>
          </div>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-primary mb-6 leading-tight">
            Professionalism Rewarded
          </h3>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            Every dollar spent earns you {rewards.pointsPerDollar} points.
            Referrals earn you {rewards.referralPoints} points instantly.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                <span className="material-symbols-outlined text-lg">verified</span>
              </div>
              <p className="text-on-surface">No expiration on points as long as your account remains active.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                <span className="material-symbols-outlined text-lg">calendar_today</span>
              </div>
              <p className="text-on-surface">Points applied automatically within 24 hours of service.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
