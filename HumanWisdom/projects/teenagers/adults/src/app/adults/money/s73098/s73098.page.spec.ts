import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73098Page } from './s73098.page';

describe('S73098Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73098Page;
  let fixture: ComponentFixture<S73098Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73098Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73098Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
