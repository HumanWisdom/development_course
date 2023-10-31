import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62106Page } from './s62106.page';

describe('S62106Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62106Page;
  let fixture: ComponentFixture<S62106Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62106Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62106Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
