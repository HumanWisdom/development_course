import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141059Page } from './s141059.page';

describe('S141059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141059Page;
  let fixture: ComponentFixture<S141059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
