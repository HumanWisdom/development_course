import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55009Page } from './s55009.page';

describe('S55009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55009Page;
  let fixture: ComponentFixture<S55009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
