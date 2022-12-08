import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62030Page } from './s62030.page';

describe('S62030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62030Page;
  let fixture: ComponentFixture<S62030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
