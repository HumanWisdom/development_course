import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116050Page } from './s116050.page';

describe('S116050Page', () => {
      
    let component:  S116050Page;
  let fixture: ComponentFixture<S116050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
