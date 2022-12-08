import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62078Page } from './s62078.page';

describe('S62078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62078Page;
  let fixture: ComponentFixture<S62078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
