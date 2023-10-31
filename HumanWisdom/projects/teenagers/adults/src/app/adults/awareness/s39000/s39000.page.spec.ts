import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActiveGuard } from 'src/app/active.guard';

import { S39000Page } from './s39000.page';

describe('S39000Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S39000Page;
  let fixture: ComponentFixture<S39000Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S39000Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S39000Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
