import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134076Page } from './s134076.page';

describe('S134076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134076Page;
  let fixture: ComponentFixture<S134076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
