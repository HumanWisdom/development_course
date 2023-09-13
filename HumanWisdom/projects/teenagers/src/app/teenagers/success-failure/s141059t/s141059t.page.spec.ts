import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141059tPage } from './s141059t.page';

describe('S141059tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141059tPage;
  let fixture: ComponentFixture<S141059tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141059tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141059tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
