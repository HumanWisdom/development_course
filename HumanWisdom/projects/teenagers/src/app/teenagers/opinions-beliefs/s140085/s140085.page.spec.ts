import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140085Page } from './s140085.page';

describe('S140085Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140085Page;
  let fixture: ComponentFixture<S140085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
