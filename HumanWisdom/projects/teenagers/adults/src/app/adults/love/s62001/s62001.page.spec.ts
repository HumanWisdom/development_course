import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62001Page } from './s62001.page';

describe('S62001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62001Page;
  let fixture: ComponentFixture<S62001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
