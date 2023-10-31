import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64043Page } from './s64043.page';

describe('S64043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64043Page;
  let fixture: ComponentFixture<S64043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
