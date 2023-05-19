import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116051Page } from './s116051.page';

describe('S116051Page', () => {
      
    let component:  S116051Page;
  let fixture: ComponentFixture<S116051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
