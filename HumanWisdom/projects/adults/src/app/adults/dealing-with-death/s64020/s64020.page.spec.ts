import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64020Page } from './s64020.page';

describe('S64020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64020Page;
  let fixture: ComponentFixture<S64020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
