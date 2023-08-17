import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134187Page } from './s134187.page';

describe('S134187Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134187Page;
  let fixture: ComponentFixture<S134187Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134187Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134187Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
