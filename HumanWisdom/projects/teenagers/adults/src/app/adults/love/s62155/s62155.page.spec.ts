import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62155Page } from './s62155.page';

describe('S62155Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62155Page;
  let fixture: ComponentFixture<S62155Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62155Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62155Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
