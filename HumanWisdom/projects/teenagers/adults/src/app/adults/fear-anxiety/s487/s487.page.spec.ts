import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActiveGuard } from 'src/app/active.guard';

import { S487Page } from './s487.page';

describe('S487Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S487Page;
  let fixture: ComponentFixture<S487Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ S487Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S487Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
