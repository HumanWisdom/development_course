import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62150Page } from './s62150.page';

describe('S62150Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62150Page;
  let fixture: ComponentFixture<S62150Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62150Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62150Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
