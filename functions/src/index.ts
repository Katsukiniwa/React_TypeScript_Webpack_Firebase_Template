import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

const modifyAdmin = (uid: string, isAdmin: boolean) => {
  admin
    .auth()
    .setCustomUserClaims(uid, { admin: isAdmin })
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('done');
    })
    .catch((error) => {
      throw error;
    });
};

exports.addAdminClaim = functions.firestore.document('adminUsers/{docID}').onCreate((snap) => {
  const newAdminUser = snap.data();
  if (newAdminUser === undefined) return;
  modifyAdmin(newAdminUser.uid, true);
});

exports.removeAdminClaim = functions.firestore.document('adminUsers/{docID}').onDelete((snap) => {
  const deletedAdminUser = snap.data();
  if (deletedAdminUser === undefined) return;
  modifyAdmin(deletedAdminUser.uid, false);
});
