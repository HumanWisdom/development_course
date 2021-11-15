import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62099Page } from './s62099.page';

describe('S62099Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62099Page;
  let fixture: ComponentFixture<S62099Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62099Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62099Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
