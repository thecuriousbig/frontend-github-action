concurrent: 1
on 'READY_TO_MERGE' label:
  if (isApproved()) {
      rebase();
      if (runTest()) {
          merge();
          build();
          deploy();
          addLabel('MERGED');
      } else {
          comment('test failed: {testResult.reason}');
      }
  }
  removeLabel('ready-to-merge')

on 'READY_TO_MERGE_HOTFIX' label:
   mergeTo('dev');


DEV TO MAIN
// No PR dev => main
on trigger manual 'deploy_hotfix'
    params 'commitId'
    checkout('main');
    cherryPick(commitId);
    push();
    deploy();

// No PR dev => main
on trigger manual 'deploy'
    checkout('main');
    mergeFrom('origin/dev').noFastForward();
    push();
    deploy();