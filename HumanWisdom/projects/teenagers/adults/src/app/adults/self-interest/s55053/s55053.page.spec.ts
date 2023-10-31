import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55053Page } from './s55053.page';

describe('S55053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55053Page;
  let fixture: ComponentFixture<S55053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
