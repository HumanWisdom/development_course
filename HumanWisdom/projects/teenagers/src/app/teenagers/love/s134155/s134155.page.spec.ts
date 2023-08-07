import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134155Page } from './s134155.page';

describe('S134155Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134155Page;
  let fixture: ComponentFixture<S134155Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134155Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134155Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
