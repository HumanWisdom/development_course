import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64024Page } from './s64024.page';

describe('S64024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64024Page;
  let fixture: ComponentFixture<S64024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
