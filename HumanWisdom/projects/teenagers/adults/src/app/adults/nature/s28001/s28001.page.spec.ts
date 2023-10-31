import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28001Page } from './s28001.page';

describe('S28001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28001Page;
  let fixture: ComponentFixture<S28001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
