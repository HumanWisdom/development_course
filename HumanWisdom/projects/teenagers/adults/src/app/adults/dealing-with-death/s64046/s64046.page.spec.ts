import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64046Page } from './s64046.page';

describe('S64046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64046Page;
  let fixture: ComponentFixture<S64046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
