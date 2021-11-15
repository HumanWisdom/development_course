import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64026Page } from './s64026.page';

describe('S64026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64026Page;
  let fixture: ComponentFixture<S64026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
