import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActiveGuard } from 'src/app/active.guard';

import { S162Page } from './s162.page';

describe('S162Page', () => {
  let  canActivate:[ActiveGuard],  
    // canActivate:[ActiveGuard],  
    component: S162Page;
  let fixture: ComponentFixture<S162Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ S162Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S162Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
