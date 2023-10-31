import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18010Page } from './s18010.page';

describe('S18010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18010Page;
  let fixture: ComponentFixture<S18010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
