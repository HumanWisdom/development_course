import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55049Page } from './s55049.page';

describe('S55049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55049Page;
  let fixture: ComponentFixture<S55049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
